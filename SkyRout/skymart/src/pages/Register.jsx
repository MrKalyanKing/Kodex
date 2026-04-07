import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { toast } from 'react-hot-toast';
import { Zap } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (name && email && password) {
        dispatch(login({ name, email }));
        toast.success(`Account created successfully! Welcome, ${name}.`);
        navigate('/');
      } else {
        toast.error('Please fill in all fields.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md p-8 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand">
            <Zap className="h-6 w-6 text-black fill-black" />
          </div>
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
          <p className="mt-2 text-sm text-gray-500">Join SkyMart to start your premium shopping experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          
          <div className="mt-2 flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/10 bg-white/5 text-brand focus:ring-brand accent-brand" required />
            <span className="text-xs text-gray-400">I agree to the <a href="#" className="text-brand hover:underline">Terms of Service</a> and <a href="#" className="text-brand hover:underline">Privacy Policy</a>.</span>
          </div>

          <Button type="submit" isLoading={isLoading} className="mt-4 w-full">
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Register;
