import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-100px] h-96 w-96 rounded-full bg-indigo-600/30 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <LoginForm />
    </main>
  );
}