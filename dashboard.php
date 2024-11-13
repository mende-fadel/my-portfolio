<?php
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: contact-form.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de bord</title>
</head>
<body>
    <h2>Bienvenue sur le tableau de bord</h2>
    <p>C'est une zone protégée. Vous êtes connecté.</p>

    <a href="logout.php">Déconnexion</a>
</body>
</html>
