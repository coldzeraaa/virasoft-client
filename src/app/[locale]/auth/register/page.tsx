'use client';

export default function AuthRegister() {
  return (
    <div className="container flex items-center justify-center py-10">
      <AuthRegisterClient />
    </div>
  );
}

interface RegisterFormValues {
  login: string;
  token: string;
  firstName: string;
  lastName: string;
  password: string;
}
