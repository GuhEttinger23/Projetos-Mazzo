// Nova função para abrir o Lightbox com os vídeos do drone
  function openDroneVideo() {
    // Conteúdo HTML para o player e lista de vídeos (MP4 locais)
    const videoContent = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <style>
                /* Estilos essenciais redefinidos para o iframe */
                :root {--orange: #FF6A00;}
                body { background: #000; color: white; margin: 0; font-family: Inter, sans-serif; }
                .video-container { padding: 20px; max-width: 900px; margin: auto; }
                h3 { color: var(--orange); margin-top: 0; }
                video { width: 100%; max-height: 400px; border-radius: 8px; background: #111; display: block; }
                h4 { margin-top: 20px; margin-bottom: 10px; color: rgba(255,255,255,0.9); }
                p { color: rgba(255,255,255,0.7); }
                a { color: var(--orange); text-decoration: underline; }
                @media(max-width: 600px) { .video-container { padding: 10px; } }
            </style>
        </head>
        <body>
            <div class="video-container">
                <h3>Vídeos do Drone em Ação</h3>
                
                <div style="margin-bottom: 30px;">
                  <h4>Estrutura de Voo Drone</h4>
                  <video controls>
                    <source src="Estrutura de Voo Drone.mp4" type="video/mp4">
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h4>Drone em Movimento</h4>
                  <video controls>
                    <source src="Vídeo_de_Drone_em_Movimento.mp4" type="video/mp4">
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>

                <p style="text-align: center;">Para mais vídeos, visite nosso <a href="https://www.youtube.com/@MAZZODrones" target="_blank">Canal no YouTube</a>!</p>
            </div>
        </body>
        </html>
    `;

    // 1. Injeta o conteúdo no iframe (usando data URI, mais robusto)
    const dataUri = 'data:text/html;charset=utf-8,' + encodeURIComponent(videoContent);
    document.getElementById('lightboxFrame').src = dataUri;
    
    // 2. Mostra o Lightbox
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeLightbox(){
    // Limpar o iframe ao fechar para parar a reprodução
    document.getElementById('lightboxFrame').src = '';
    document.getElementById('lightbox').style.display = 'none';
  }