import Nav from '@/app/ui/nav/nav';
import { Providers } from '@/app/alessandro/providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div>
        <Nav />
      </div>
      <div>{children}</div>
    </Providers>
  );
}
