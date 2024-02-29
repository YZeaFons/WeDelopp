const {suspendUser} = require('../services/userService');
const {unsuspendUser} = require('../services/userService');

const suspendUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const updatedUser = await userService.suspendUser(userId);
        res.status(200).json({ message: 'User successfully suspended', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Función para reactivar un usuario suspendido
const unsuspendUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const updatedUser = await userService.unsuspendUser(userId);
        res.status(200).json({ message: 'User successfully reactivated', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { suspendUser, unsuspendUser };