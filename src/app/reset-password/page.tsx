import { Suspense } from 'react';
import { ResetPassword } from "@/components/component/auth/forgotPassword/fortgotPassword";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Je test des trucs WALA</div>}>
      <ResetPassword />
    </Suspense>
  );
}
