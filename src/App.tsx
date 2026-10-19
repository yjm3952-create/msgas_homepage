/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType, GasProduct, NoticeItem, MsdsDocument } from './types';
import { MSDS_DOCS } from './data/companyData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/screens/HomeScreen';
import { CompanyScreen } from './components/screens/CompanyScreen';
import { ProductCatalogScreen } from './components/screens/ProductCatalogScreen';
import { EngineeringScreen } from './components/screens/EngineeringScreen';
import { FacilitiesScreen } from './components/screens/FacilitiesScreen';
import { EsgScreen } from './components/screens/EsgScreen';
import { CustomerSupportScreen } from './components/screens/CustomerSupportScreen';
import { QuoteModal } from './components/modals/QuoteModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { MsdsModal } from './components/modals/MsdsModal';
import { NoticeModal } from './components/modals/NoticeModal';
import { CertificateModal } from './components/modals/CertificateModal';
import { SearchModal } from './components/modals/SearchModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  // Modal States
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultGas, setQuoteDefaultGas] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [selectedMsds, setSelectedMsds] = useState<MsdsDocument | null>(null);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenQuote = (defaultGas?: string) => {
    setQuoteDefaultGas(defaultGas);
    setQuoteModalOpen(true);
  };

  const handleOpenProductDetail = (product: GasProduct) => {
    setSelectedProduct(product);
  };

  const handleOpenNoticeDetail = (notice: NoticeItem) => {
    setSelectedNotice(notice);
  };

  const handleSelectMsdsById = (msdsId?: string) => {
    if (!msdsId) return;
    const doc = MSDS_DOCS.find((m) => m.id === msdsId);
    if (doc) {
      setSelectedMsds(doc);
    }
  };

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans selection:bg-[#0057c0] selection:text-white">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setSearchModalOpen(true)}
        lang={lang}
        onToggleLang={setLang}
      />

      {/* Main Content Area with appropriate top padding for fixed header */}
      <main className="flex-1 w-full pt-20">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={handleSelectTab}
            onOpenQuote={handleOpenQuote}
            onOpenProductDetail={handleOpenProductDetail}
            onOpenNoticeDetail={handleOpenNoticeDetail}
            onOpenCertModal={() => setCertModalOpen(true)}
            lang={lang}
          />
        )}

        {currentTab === 'company-overview' && (
          <CompanyScreen
            onOpenCertModal={() => setCertModalOpen(true)}
            onOpenQuote={() => handleOpenQuote()}
            lang={lang}
          />
        )}

        {currentTab === 'product-catalog' && (
          <ProductCatalogScreen
            onOpenProductDetail={handleOpenProductDetail}
            onOpenQuote={handleOpenQuote}
            lang={lang}
          />
        )}

        {currentTab === 'engineering-services' && (
          <EngineeringScreen
            onOpenQuote={handleOpenQuote}
            lang={lang}
          />
        )}

        {currentTab === 'production-facilities' && (
          <FacilitiesScreen
            onOpenQuote={handleOpenQuote}
            lang={lang}
          />
        )}

        {currentTab === 'esg-management' && (
          <EsgScreen
            onOpenCertModal={() => setCertModalOpen(true)}
            onOpenQuote={() => handleOpenQuote()}
            lang={lang}
          />
        )}

        {(currentTab === 'customer-support' ||
          currentTab === 'msds-archive' ||
          currentTab === 'directions') && (
          <CustomerSupportScreen
            onSelectMsds={setSelectedMsds}
            onSelectNotice={handleOpenNoticeDetail}
            onOpenQuote={() => handleOpenQuote()}
            lang={lang}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenCertModal={() => setCertModalOpen(true)}
        lang={lang}
      />

      {/* Modals & Overlays */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultGas={quoteDefaultGas}
        lang={lang}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleOpenQuote}
        onViewMsds={handleSelectMsdsById}
        lang={lang}
      />

      <MsdsModal
        document={selectedMsds}
        onClose={() => setSelectedMsds(null)}
        lang={lang}
      />

      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
        lang={lang}
      />

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        lang={lang}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectMsds={(m) => setSelectedMsds(m)}
        onSelectNotice={(n) => setSelectedNotice(n)}
        lang={lang}
      />
    </div>
  );
}
