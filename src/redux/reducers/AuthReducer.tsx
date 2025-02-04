import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword,sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

interface UserProp {
    uid: string | null;
    email: string;
    name: string;
    role: "user" | "admin";
    loading: boolean;
    error: string | null;
    resetEmailSent:boolean;
}

const initialState: UserProp = {
    uid: "",
    email: "",
    name: "",
    role: "user",
    loading: false,
    error: null,
    resetEmailSent: false,
};

export const signupWithEmailAndPassword = createAsyncThunk('auth/signup', async (credentials: { name: string, email: string, password: string, role: "user" | "admin" }, { rejectWithValue }) => {
    try {
        const { email, password, name, role } = credentials;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        await setDoc(doc(db, "users", user.uid), {
            email, name, role, uid: user.uid
        });

        return { uid: user.uid, email, name, role };
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const loginWithEmailAndPassword = createAsyncThunk('auth/login', async (credentials: { email: string, password: string }, { rejectWithValue }) => {
    try {
        const { email, password } = credentials;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.exists() ? userDoc.data() : null;

        if (!userData) throw new Error("User not found");

        return { uid: user.uid, email, name: userData?.name, role: userData?.role, photoURL: userData?.photoURL };
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const signInWithGoogle = createAsyncThunk('auth/google', async (_, { rejectWithValue }) => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result?.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        let role = "user";

        if (userDoc.exists()) {
            role = userDoc?.data()?.role;
        } else {
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                name: user.displayName || "No Name",
                role,
                uid: user.uid
            });
        }

        return { uid: user.uid, email: user.email || "", name: user.displayName || "No Name", role, photoURL: user.photoURL };
    } catch (error : any) {
        return rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        await signOut(auth);
        return initialState;
    } catch (error : any) {
        return rejectWithValue(error.message);
    }
});

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (email: string, { rejectWithValue }) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return email; // If successful, return email to show confirmation message
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const AuthReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupWithEmailAndPassword.fulfilled, (state, action) => {
                state.uid = action.payload.uid;
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.role = action.payload.role;
                state.loading = false;
                state.error = null;
            })
            .addCase(signupWithEmailAndPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupWithEmailAndPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
                state.uid = action.payload.uid;
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.role = action.payload.role;
                state.loading = false;
                state.error = null;
            })
            .addCase(loginWithEmailAndPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.uid = action.payload.uid;
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.role =  "user" ;
                state.loading = false;
                state.error = null;
            })
            .addCase(signInWithGoogle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInWithGoogle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(logout.fulfilled, (state) => {
                state.uid = null;
                state.email = "";
                state.name = "";
                state.role = "user";
                state.loading = false;
                state.error = null;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(resetPassword.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.resetEmailSent = false;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.resetEmailSent = true; // Show confirmation message
                state.error = null;
                state.email = action.payload; // Store email for reference
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.resetEmailSent = false;
            });
    }
});

export default AuthReducer.reducer;
