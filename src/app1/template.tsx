export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>我是模板</h2>
      {children}
    </div>
  );
}
