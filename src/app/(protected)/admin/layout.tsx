import AuthChecker from "@/lib/AuthChecker";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <AuthChecker userRole={['admin','superadmin']}>
         {children}
    </AuthChecker>
  )
}
