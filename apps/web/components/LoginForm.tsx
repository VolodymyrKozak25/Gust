interface LoginFormProps {
  children: string;
}

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center p-4 border-2 border-blue-150">
      <label htmlFor="username">Username</label>
      <input id="username" type="email" placeholder="Enter your username" />
      <label htmlFor="password">Password</label>
      <input id="password" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  );
}
