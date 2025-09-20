<?php
// Koneksi database
$host = "localhost";
$user = "root"; // ganti sesuai user database
$password = ""; // ganti sesuai password database
$dbname = "portofolio_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$nama = $_POST['name'];
$email = $_POST['email'];
$pesan = $_POST['message'];

// Simpan ke database
$sql = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

if ($conn->query($sql) === TRUE) {
    echo "Terima kasih! Pesan Anda telah tersimpan.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
