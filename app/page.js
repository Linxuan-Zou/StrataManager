export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API;
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to StrataManagePro</h1>
      <p>This is a platform for property management and owner communication.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Features:</h2>
        <ul>
          <li> Owner information management</li>
          <li> Announcement and notification system</li>
          <li> Document downloads (meeting minutes, management rules, etc.)</li>
          
        </ul>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2>API Endpoint (from environment variable):</h2>
        <p style={{ color: 'green' }}>{apiUrl}</p>
      </section>
    </main>
  );
}
