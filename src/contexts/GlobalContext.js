import React, { createContext, useState } from 'react';
import useProducts from '../hooks/useProducts';
import addToCartHelper from '../helpers/AddToCartHelper';
import useBasket from '../hooks/useBaskets';
import DeleteFromCartHelper from '../helpers/DeleteFromCartHelper';
import useCommands from '../hooks/useCommands';
import CancelCommandHelper from '../helpers/CancelCommandHelper';
import CreateCommandHelper from '../helpers/CreateCommand';
import ValidateCommandHelper from '../helpers/ValidateCommand';

export const GlobalContext = createContext();
export const apiRoot = process.env.REACT_APP_API_ROOT;

const GlobalProvider = ({ children }) => {
   
    const [products, productsError] = useProducts()

    const [cart, setCart] = useState([]);
    const [cartError, setCartError] = useState(null);

    const [commands, setCommands] = useState([]);
    const [commandError, setCommandError] = useState(null);

    // load and initialize cart for the current users (clieentId) if cart exists
    useBasket(undefined, setCart, setCartError);

    // load and initialize cart for the current users (clieentId) if cart exists
    useCommands(undefined, setCommands, setCommandError)

    // addToCart uses the default clientId
    const addToCart = async (productId) => {
        try {
            const data = await addToCartHelper(undefined, productId);
            setCart(data.lignes)
        } catch (error) {
            console.error('Add tocart error : ', error);
            if (error?.status === 400) {
                const errorBody = await error.json();
                setCartError(errorBody)
                alert(errorBody.message)
            }

            // do something with error in the UI but For now we just showing alert              
        }

    }

    const removeFromCart = async (productId) => {
        try {
            const data = await DeleteFromCartHelper(undefined, productId);
            setCart(data.lignes)
        } catch (error) {
            console.error('delete from cart error : ', error);
            setCartError(error)
        }
    };

    const createCommand = async () => {
        try {
            // called with thee default connecteed user
            const data = await CreateCommandHelper(undefined);
            setCommands(prev => ([
                ...prev,
                data,
            ]));
            setCart([]); 
        } catch (error) {
            console.error('create command error : ', error);
            setCommandError(error)
        }
    }
    const validateCommand = async (commandId) => {

        try {
            // called with thee default connecteed user
            const data = await ValidateCommandHelper(commandId);
            setCommands(prev => prev.map(command => {
                if (command.id === commandId) return data;
                return command;
            }));
           
        } catch (error) {
            console.error('validate command error : ', error);
            setCommandError(error)
        }
    }

    const cancelCommand = async (commandId) => {
        try {
            const data = await CancelCommandHelper(commandId);
            setCommands(prev => prev.map(command => {
                if (command.id === commandId) return data;
                return command;
            }));
        } catch (error) {
            console.error('cancel command error : ', error);
            if (error?.status === 403) {
                const errorBody = await error.json();
                setCommandError(errorBody)
                alert(errorBody.message)
            }
            
        }
    }

    return (
        <GlobalContext.Provider value={{
            products, productsError,
            cart, cartError, addToCart, removeFromCart, commands, commandError, createCommand, cancelCommand, validateCommand
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
