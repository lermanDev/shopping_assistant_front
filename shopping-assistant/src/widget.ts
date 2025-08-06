(function () {
    if ((window as any).__chatWidgetLoaded) return;
    (window as any).__chatWidgetLoaded = true;
  
    // 1. Crear el iframe del chatbox
    const iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:5173/chat.html'; // Cambia por tu ruta real
    iframe.style.cssText = `
      position: fixed;
      bottom: 6.5rem;    /* 4rem (botón) + 1.5rem separación */
      right: 1rem;
      width: 440px;
      height: 634px;
      border: none;
      border-radius: 16px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      z-index: 999999;
      background: white;
      display: none;
      transition: all 0.3s;
    `;
    iframe.id = 'my-chat-widget';
  
    // 2. Crear el botón flotante (con tu HTML y clases)
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('data-state', 'closed');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="text-white block border-gray-200 align-middle">
        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" class="border-gray-200"></path>
      </svg>
    `;
    button.className = `
      fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium
      disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black
      hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5
      hover:text-gray-900
    `.replace(/\s+/g, ' ');
  
    // 3. Alternar el iframe al pulsar el botón
    button.onclick = function () {
      const open = iframe.style.display === 'block';
      iframe.style.display = open ? 'none' : 'block';
      button.setAttribute('aria-expanded', open ? 'false' : 'true');
      button.setAttribute('data-state', open ? 'closed' : 'open');
    };
  
    // 4. Añadir al DOM
    document.body.appendChild(iframe);
    document.body.appendChild(button);
  })();
  