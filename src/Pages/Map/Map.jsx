import React from 'react';
import Style from "./Map.module.scss";
import FilialsHeader from '@/components/Filials_Header/FilialsHeader';

const Map = () => {
  return (
    <div>
      <FilialsHeader />
      <div className={Style.Map}><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}> </a><a href="https://yandex.uz/maps/10335/tashkent/chain/max_way/143638209990/?from=api-maps&ll=69.270237%2C41.297495&origin=jsapi_2_1_79&sll=69.211142%2C41.274580&sspn=0.420359%2C0.187935&utm_medium=mapframe&utm_source=maps&z=12.23" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}> </a><iframe className={Style.Map} title=' ' src="https://yandex.uz/map-widget/v1/profile?display-text=Max%20Way&from=api-maps&ll=69.270237%2C41.297495&mode=search&origin=jsapi_2_1_79&sll=69.211142%2C41.274580&sspn=0.420359%2C0.187935&text=%7B%22text%22%3A%22Max%20Way%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%22143638209990%22%5D%7D%5D%7D&z=12.23" width="560" height="400" frameBorder="1" allowFullScreen style={{ position: "relative" }} /></div>
    </div>
  )
}

export default Map;