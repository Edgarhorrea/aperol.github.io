// Script à ajouter sur themixer.com pour tracker les liens vers Aperol
// Ce script doit être ajouté sur toutes les pages de themixer.com

(function() {
  console.log("The Mixer Referrer Tracker - Initializing...");
  
  // Fonction pour stocker le referrer quand l'utilisateur clique sur un lien Aperol
  function trackAperolLinks() {
    // Trouver tous les liens vers les domaines Aperol
    const aperolDomains = [
      'aperol.com',
      'shop.aperol.com', 
      'us-shop.aperol.com',
      'www.aperol.com',
      'www.shop.aperol.com',
      'www.us-shop.aperol.com'
    ];
    
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      try {
        const url = new URL(link.href);
        const isAperolLink = aperolDomains.some(domain => 
          url.hostname === domain || url.hostname.endsWith('.' + domain)
        );
        
        if (isAperolLink) {
          console.log("The Mixer Referrer Tracker - Found Aperol link:", link.href);
          
          // Ajouter un gestionnaire de clic pour stocker le referrer
          link.addEventListener('click', function(e) {
            console.log("The Mixer Referrer Tracker - User clicked Aperol link");
            
            // Stocker l'URL actuelle comme referrer
            sessionStorage.setItem('aperol-referrer', window.location.href);
            console.log("The Mixer Referrer Tracker - Stored referrer:", window.location.href);
          });
        }
      } catch (e) {
        // Ignorer les URLs invalides
      }
    });
  }
  
  // Exécuter quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackAperolLinks);
  } else {
    trackAperolLinks();
  }
  
  // Aussi exécuter après un délai pour capturer les liens ajoutés dynamiquement
  setTimeout(trackAperolLinks, 1000);
  
})();
