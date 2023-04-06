import React from 'react';
import dataYtb from '~/dbData/data';
import Item from './Index';

const ListItem = () => {
    return (
        <div>
            <div className="app__layout active">
                {/* render data thonng qua props */}
                {dataYtb.map((item, index) => {
                    let checked = '';
                    if (index === 1) {
                        checked = 'active';
                    }
                    return (
                        <Item
                            key={item.id}
                            image={item.image}
                            avatar={item.avatar}
                            title={item.title || 'error data title'}
                            content={item.content}
                            className={checked}
                        />
                    );
                })}

                {/* <Item
                image="https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Wellcome to the Sun"
                content="Never go back to the Sun"
                className={"action"||""}
            />
            */}
            </div>
        </div>
    );
};

export default ListItem;