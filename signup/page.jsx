import React from 'react';
import SignUp from'../components/signup'
import Navbar from '@/app/components/navbar';

function SignInPage() {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
     <SignUp/>{/* SignIn component below the Navbar */}
    
    </div>
  );
}

export default SignInPage;
