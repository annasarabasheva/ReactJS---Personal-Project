import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        this.logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Something went wrong.</h1>
                    <p>We're sorry, but something went wrong. Please try refreshing the page or click the button below to go back to the home page.</p>
                    <button onClick={() => window.location.href = '/'}>Go to Home</button>
                </div>
            );
        }

        return this.props.children;
    }
}