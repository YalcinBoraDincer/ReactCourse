export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 14;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour <= closeHour;
  
    return (
      <footer>
        {isOpen ? (
          <p>Aksam {closeHour}'e kadar siparis verebilirsiniz.</p>
        ) : (
          <p>Su an kapaliyiz. Acilis saati {openHour}.</p>
        )}
      </footer>
    );
  }