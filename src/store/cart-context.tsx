import { createContext, useState, ReactNode } from "react";

export type CartContextType = {
    productNumber: number;
    temporaryOrder: number;
    addProduct: () => void;
    substractProduct: () => void;
    addCart: () => void;
    deleteCart: () => void;
    handleEnableCart: () => void,
    isCartVisible: boolean;
    isCartEmpty: boolean;
    sneakerPrice: number;
}

const SNEAKER_PRICE :number = 125;
export const CartContext = createContext<CartContextType>({ 
    productNumber: 0,
    temporaryOrder: 0,
    addProduct: () => {},
    substractProduct: () => {},
    addCart: () => {} ,
    deleteCart: () => {},
    handleEnableCart: () => {},
    isCartVisible: true,
    isCartEmpty: true, 
    sneakerPrice: SNEAKER_PRICE
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [productNumber, setProductNumber] = useState<number>(0)
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false)
    const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)
    const [temporaryOrder, setTemporaryOrder] = useState<number>(0)

    const handleEnableCart = () => setIsCartVisible(!isCartVisible)
   
    const substractProduct = (): void => {
        productNumber > 0 ? setProductNumber(productNumber - 1)
        : setProductNumber(0);
     }
    const addProduct = () :void => setProductNumber(productNumber + 1)
    const addCart = () :void => {
         productNumber > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true)
         setTemporaryOrder((prevTemporaryOrder) => prevTemporaryOrder + productNumber); 
         setProductNumber(0);
    }
    const deleteCart = () :void => {
         setIsCartVisible(true)
         setProductNumber(0)
    }

    const cartCtxValue :CartContextType = {
        productNumber,
        addProduct,
        substractProduct,
        addCart,
        deleteCart,
        isCartEmpty,
        isCartVisible,
        handleEnableCart,
        temporaryOrder,
        sneakerPrice: SNEAKER_PRICE
    }

    return (
        <CartContext.Provider value={cartCtxValue}>
            {children}
        </CartContext.Provider>
    )
}