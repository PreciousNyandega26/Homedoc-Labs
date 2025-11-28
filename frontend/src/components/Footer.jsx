import React from 'react';
import { Activity, ~Instagram~,~Facebook~,~Twitter~,~Linkedin~ } from 'lucide-react';

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-teal-600 p-1.5 rounded mr-2">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">HomeDoc<span className="text-teal-500">Labs</span></span>
            </div>

              <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate(View.LAB_ANALYZER)} className="hover:text-teal-400 transition-colors">Lab Analysis</button></li>
              <li><button onClick={() => onNavigate(View.SYMPTOM_CHECKER)} className="hover:text-teal-400 transition-colors">Symptom Checker</button></li>
              <li><button onClick={() => onNavigate(View.DOCTOR_FINDER)} className="hover:text-teal-400 transition-colors">Find a Doctor</button></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Drug Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Company</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><button onClick={() => onNavigate(View.ABOUT)} className="hover:text-teal-400 transition-colors">About Us</button></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Investors</a></li>
              <li><button onClick={() => onNavigate(View.CONTACT)} className="hover:text-teal-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
            <div className="text-sm text-slate-500">
              <p>1-800-HOMEDOC</p>
              <p>support@homedoclabs.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2024 HomeDoc Labs Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
