import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

// Estética: Azul Índigo y Crema (Vintage Engraving)
const EnerWallet = () => {
  const [balance, setBalance] = useState(1450); // EnerTokens (ENER)
  const [lastReading, setLastReading] = useState(125.5);

  return (
    <div style={{ backgroundColor: '#F5F2ED', minHeight: '100vh', padding: '20px', fontFamily: 'serif' }}>
      <header style={{ textAlign: 'center', borderBottom: '2px solid #1A2E44', marginBottom: '30px' }}>
        <h1 style={{ color: '#1A2E44', fontSize: '2.5rem' }}>EnerWallet</h1>
      </header>

      <main style={{ maxWidth: '400px', margin: '0 auto', border: '3px solid #1A2E44', padding: '20px', backgroundColor: '#FFF' }}>
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#1A2E44', textTransform: 'uppercase', letterSpacing: '2px' }}>Saldo de EnerTokens</h2>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1A2E44', margin: '10px 0' }}>
            {balance.toLocaleString()} ENER
          </p>
          <span style={{ color: '#555' }}>($14.50 USD)</span>
        </section>

        <div style={{ display: 'grid', gap: '15px' }}>
          <button style={buttonStyle}>Registrar Lectura</button>
          <button style={buttonStyle}>Reclamar Recompensas</button>
          <button style={{ ...buttonStyle, backgroundColor: '#E0DCCF', color: '#1A2E44' }}>Ver Historial Completo</button>
        </div>

        <footer style={{ marginTop: '40px', borderTop: '1px solid #CCC', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: '#1A2E44' }}>Última Transacción Verificada</h3>
          <p style={{ fontSize: '0.9rem' }}>Lectura: <strong>{lastReading} kWh</strong> | ID: MTR-001</p>
        </footer>
      </main>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#1A2E44',
  color: '#F5F2ED',
  border: 'none',
  padding: '15px',
  fontSize: '1rem',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};

export default EnerWallet;
