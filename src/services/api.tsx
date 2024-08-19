export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};


export const signupUser = async (userData: { firstName: string, lastName: string, email: string, password: string }) => {
    try {
        const response = await fetch('http://localhost:8081/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};

export const resetPassword = async (email: string, currentPassword: string, newPassword: string) => {
    try {
        const response = await fetch('http://localhost:8081/api/users/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, currentPassword, newPassword }),
        });
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        throw error;
    }
};

