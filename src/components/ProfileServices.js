import React from "react";

export const ProfileServices = ({servicesTitle, services}) => {
    let maxValue = 0;

    services.forEach(element => {
        maxValue = element.count > maxValue ? element.count : maxValue 
    });

    let totalCount = services.reduce((accumulator, elem) => {
        return accumulator + elem.count}, 0);

    const servicesList = services.map(elem => {
        let currentWidth = elem.count*100/totalCount
        return (
            <div className="services-list__item-box" key={elem.title} >
                <p className="services-list__item-title" >
                    {elem.title}
                </p>
                <div className={elem.count === maxValue ? 
                    "services-list__count-view_max" : "services-list__count-view"} 
                    style = {{width:`${currentWidth}%`}} />
                <p className="services-list__item-count" >
                    {elem.count}
                </p>
            </div>
        )
    });

    return (
        <div className="services" >
            <p className="services__title">
                {servicesTitle}
            </p>
            <div className="services-list">
                {servicesList}
            </div>                
            <div className="services-list__item-box services-list__item-box_total">
                <p className="services-list__total-title">
                    Всего
                </p>
                <p className="services-list__total-count">
                    {totalCount}
                </p>
            </div>                
        </div>
    );
}