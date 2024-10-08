import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, FileText, Users, Shield, Bell, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-purple-900 dark:via-gray-900 dark:to-blue-900 shadow">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-purple-800 dark:text-purple-200 py-6 sticky top-0 z-10 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chacha</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/login" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Login</Link></li>
              <li><Link href="/request-access" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">Request Access</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-24">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 animate-gradient">
            Streamline Your File Review Process
          </h2>
          <p className="text-xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Empower your department with a secure, efficient, and user-friendly platform for file sharing and review between officials and HODs.
          </p>
          <div className="flex justify-center space-x-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-transform duration-300 hover:scale-105">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/request-access">Request Access</Link>
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-4xl font-semibold mb-12 text-center text-purple-800 dark:text-purple-300">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FileText className="w-12 h-12 mb-4 text-purple-600" />, title: "Secure File Upload", description: "Easily upload and store files with Firebase, ensuring top-notch security for your sensitive documents." },
              { icon: <CheckCircle className="w-12 h-12 mb-4 text-purple-600" />, title: "Efficient Review Process", description: "Streamlined workflow for HODs to review, approve, or reject files with attached comments." },
              { icon: <Bell className="w-12 h-12 mb-4 text-purple-600" />, title: "Real-time Notifications", description: "Stay updated with instant notifications on file status changes and new review requests." },
              { icon: <Users className="w-12 h-12 mb-4 text-purple-600" />, title: "Role-based Access", description: "Tailored access and permissions for officials and HODs, ensuring proper data handling." },
              { icon: <Shield className="w-12 h-12 mb-4 text-purple-600" />, title: "Data Security", description: "Advanced encryption and secure protocols to protect your department's sensitive information." },
              { icon: <FileText className="w-12 h-12 mb-4 text-purple-600" />, title: "Comprehensive Dashboard", description: "Get a bird's-eye view of all your files, their statuses, and pending actions in one place." },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-purple-100 dark:border-purple-900 hover:shadow-lg transition-shadow duration-300">
                <CardContent>
                  {feature.icon}
                  <h4 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-4xl font-semibold mb-12 text-center text-purple-800 dark:text-purple-300">
            How It Works
          </h3>
          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-purple-300 dark:border-purple-700 space-y-12">
              {[
                { title: "File Upload", description: "Selected officials upload files with attached notes." },
                { title: "Notification", description: "HODs receive notifications about new files for review." },
                { title: "Review Process", description: "HODs review files, add comments, and approve or reject." },
                { title: "Feedback", description: "Officials receive notifications about the review outcome." },
                { title: "Action", description: "Officials take necessary actions based on HOD's feedback." },
              ].map((step, index) => (
                <li key={index} className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-purple-900">
                    <span className="text-purple-800 dark:text-purple-200 font-bold">{index + 1}</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="text-center mb-24">
          <h3 className="text-4xl font-semibold mb-6 text-purple-800 dark:text-purple-300">
            Ready to Revolutionize Your File Review Process?
          </h3>
          <p className="text-xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join departments across the nation in adopting a smarter, faster, and more secure way to manage file reviews.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-transform duration-300 hover:scale-105">
            <Link href="/request-access">
              Request Access Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2023 File Review System. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-purple-200 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-200 transition-colors duration-300">Terms of Service</Link>
            <Link href="/contact" className="hover:text-purple-200 transition-colors duration-300">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}