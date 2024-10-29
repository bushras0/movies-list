import React from 'react';
import SignIn from '../components/signin';
import Navbar from '@/app/components/navbar';

function SignInPage() {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <SignIn /> {/* SignIn component below the Navbar */}
    
    </div>
  );
}

export default SignInPage;
