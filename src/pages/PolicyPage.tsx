import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, ChevronRight, Search } from 'lucide-react';
import { policies } from '../data/policies';
import PageHeader from '../components/PageHeader';

export default function PolicyPage() {
  const { policyId } = useParams<{ policyId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  
  const policy = policies.find(p => p.id === policyId);

  if (!policy) {
    return <Navigate to="/" replace />;
  }

  const filteredPolicies = policies.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-ivory min-h-screen">
      <PageHeader 
        title={policy.title} 
        subtitle={`Last Updated: ${policy.lastUpdated}`} 
        image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <Shield className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-lg text-navy-dark">Legal Center</h3>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search policies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-ivory border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-gold"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                </div>

                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredPolicies.length > 0 ? (
                    filteredPolicies.map((p) => (
                      <Link
                        key={p.id}
                        to={`/legal/${p.id}`}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          p.id === policyId 
                            ? 'bg-navy text-ivory font-medium' 
                            : 'text-gray-600 hover:bg-ivory hover:text-navy'
                        }`}
                      >
                        {p.title}
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 p-4 text-center">No policies found.</p>
                  )}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-navy-dark mb-4">{policy.title}</h2>
                <div className="w-16 h-1 bg-gold mb-6"></div>
                <p className="text-gray-500 text-sm">
                  This document outlines the {policy.title.toLowerCase()} for Hotel Goyal Palace. By using our services, you agree to these terms.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-navy-light/5 p-6 rounded-lg mb-10">
                <h4 className="font-semibold text-navy mb-4">Table of Contents</h4>
                <ul className="space-y-2">
                  {policy.sections.map((section, idx) => (
                    <li key={idx}>
                      <a href={`#section-${idx}`} className="text-sm text-gray-600 hover:text-gold flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy Sections */}
              <div className="space-y-10">
                {policy.sections.map((section, idx) => (
                  <div key={idx} id={`section-${idx}`} className="scroll-mt-32">
                    <h3 className="text-xl font-serif text-navy mb-4">{section.title}</h3>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
