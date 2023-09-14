import { Router } from "express"
import pool from "../db.js"


//controladores para sensores

export const getSensores = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM datos_valores ORDER BY nombre"
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const getSensor = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM datos_valores WHERE id = ?", [
          req.params.id,
        ]);
    
        if (result.length === 0)
          return res.status(404).json({ message: "Sensor no encontrado" });
    
        res.json(result[0]);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createSensor = async (req, res) => {
    try {
        const { nombre, valor, status } = req.body;
        const [result] = await pool.query(
          "INSERT INTO datos_valores(nombre, valor, status) VALUES (?, ?, ?)",
          [nombre, valor, status]
        );
        res.json({
          id: result.insertId,
          nombre,
          valor,
          status
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateSensor = async (req, res) => {
    try {
        const result = await pool.query("UPDATE datos_valores SET ? WHERE id = ?", [
          req.body,
          req.params.id,
        ]);
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteSensor = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM datos_valores WHERE id = ?", [
          req.params.id,
        ]);
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Sensor no encontrado" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

//controladores centrales

//controladores para usuarios

export const getUsuarios = async (req, res) => {
  try {
      const [result] = await pool.query(
        "SELECT * FROM datos_usuarios"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const getUsuario = async (req, res) => {
  try {
      const [result] = await pool.query("SELECT * FROM datos_usuarios WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.length === 0)
        return res.status(404).json({ message: "Usuario no encontrado" });
  
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const createUsuario = async (req, res) => {
  try {
      const { name, user, password, credenciales } = req.body;
      const [result] = await pool.query(
        "INSERT INTO datos_usuarios(name, user, password, credenciales) VALUES (?, ?, ?, ?)",
        [name, user, password, credenciales]
      );
      res.json({
        id: result.insertId,
        name, 
        user,
        password,
        credenciales
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const updateUsuario = async (req, res) => {
  try {
      const result = await pool.query("UPDATE datos_usuarios SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const deleteUsuario = async (req, res) => {
  try {
      const [result] = await pool.query("DELETE FROM datos_usuarios WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Usuario no encontrado" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}