"use client";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#f3f0f2",
          color: "#111827",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <main
          style={{
            display: "grid",
            minHeight: "100vh",
            placeItems: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              maxWidth: "520px",
              border: "1px solid #fecdd3",
              borderRadius: "28px",
              background: "#ffffff",
              padding: "32px",
              textAlign: "center",
              boxShadow: "0 24px 70px rgba(136, 19, 55, 0.10)",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "28px", lineHeight: 1.2 }}>
              Algo saiu do fluxo esperado
            </h1>
            <p
              style={{
                margin: "16px 0 24px",
                color: "#475569",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              Tente carregar a pagina novamente.
            </p>
            <button
              type="button"
              onClick={() => retry()}
              style={{
                minHeight: "48px",
                border: 0,
                borderRadius: "999px",
                background: "#be123c",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 700,
                padding: "12px 22px",
              }}
            >
              Tentar novamente
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
