import { createContext, useState, ReactNode } from "react";

export type CartContextType = {
    productNumber: number;
    addProduct: () => void;
    substractProduct: () => void;
    addCart: () => void;
    deleteCart: () => void;
    isCartEmpty: boolean;
    sneakerPrice: number;
}

const SNEAKER_PRICE :number = 125;
export const CartContext = createContext<CartContextType>({ 
    productNumber: 0,
    addProduct: () => {},
    substractProduct: () => {},
    addCart: () => {} ,
    deleteCart: () => {},
    isCartEmpty: true, 
    sneakerPrice: SNEAKER_PRICE
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [productNumber, setProductNumber] = useState<number>(0)
    const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)
   
    const substractProduct = (): void => {
        if (productNumber > 0) {
           setProductNumber(productNumber - 1)
        } else {
           setProductNumber(0)
        }
     }
    const addProduct = () :void => setProductNumber(productNumber + 1)
    const addCart = () :void => {
         productNumber > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true)
    }
    const deleteCart = () :void => {
         setIsCartEmpty(true)
         setProductNumber(0)
    }

    const cartCtxValue :CartContextType = {
        productNumber,
        addProduct,
        substractProduct,
        addCart,
        deleteCart,
        isCartEmpty,
        sneakerPrice: SNEAKER_PRICE
    }

    return (
        <CartContext.Provider value={cartCtxValue}>
            {children}
        </CartContext.Provider>
    )
}