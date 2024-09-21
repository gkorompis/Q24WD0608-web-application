import rateLimit from 'express-rate-limit';



// Set up rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: 'Too many login attempts. Please try again later.',
});
    
export default limiter;