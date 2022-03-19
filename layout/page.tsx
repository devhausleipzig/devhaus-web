type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return <div className="mb-48 mt-12 space-y-32">{children}</div>;
}
