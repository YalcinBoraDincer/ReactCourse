export default function Summmary({items}){
    if(items.length === 0 ){
      return(
        <footer className="Summary">Alisveris lisetnizi hazirlamaya baslayabilirisniz.</footer>
      );
  
    }
    const itemsCount = items.length;
    const complatedItemCount= items.filter(item => item.complated).length;
    return(
      
      <footer className="Summary">
        {itemsCount === complatedItemCount ?
        <p>Alisverisi Tamamladiniz </p>:
        <p>Alisveris sepetenizde {itemsCount} urunden  {complatedItemCount} tanesini aldiniz </p>}
        
         
      
      
      </footer>
    );
  }