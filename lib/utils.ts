import { useEffect, useState } from 'react';

// Function to fetch product data from an API
export const useFetchProducts = (url: string) => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { products, loading, error };
};

// Function to format price
export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`; // Formats price to two decimal places
};

// Function to validate email
export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // Returns true if email is valid
};

// Function to scroll to top of the page
export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
};

export default { useFetchProducts, formatPrice, validateEmail, scrollToTop };