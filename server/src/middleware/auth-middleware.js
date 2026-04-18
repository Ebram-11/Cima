const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'cima-dev-secret-key-change-in-production';

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // decoded should include id, email, userRole, and managedCinemaId
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

/**
 * Middleware to restrict access based on userRole
 * @param {string[]} roles - Allowed roles
 */
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.userRole)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions.' });
    }
    next();
  };
};

/**
 * Middleware to ensure the user is the manager of the cinema they are trying to edit
 */
const canManageCinema = (req, res, next) => {
  const { id: cinemaId } = req.params;
  
  // Super Admins can manage everything
  if (req.user.userRole === 'ADMIN') {
    return next();
  }

  // Managers can only manage their assigned cinema
  if (req.user.userRole === 'STAFF' && req.user.managedCinemaId === cinemaId) {
    return next();
  }

  return res.status(403).json({ message: 'Forbidden: You do not have management rights for this cinema.' });
};

module.exports = { authMiddleware, checkRole, canManageCinema, JWT_SECRET };
