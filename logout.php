<?php
session_start();
session_destroy();
header("Location: contact-form.php");
exit;
