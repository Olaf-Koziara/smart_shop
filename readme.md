# SklepSmart

Prosty projekt front-endowy sklepu ze smart urządzeniami.

## Wymagania Wstępne

* Node.js (wraz z npm) zainstalowany na Twoim komputerze. Możesz pobrać go z [https://nodejs.org/](https://nodejs.org/).

## Instalacja

1.  Sklonuj repozytorium (jeśli jest dostępne) lub upewnij się, że masz wszystkie pliki projektu w jednym folderze.
2.  Otwórz terminal lub wiersz poleceń i przejdź do głównego katalogu projektu (folderu, w którym znajduje się plik `package.json`).
    ```bash
    cd sciezka/do/twojego/projektu/sklepsmart
    ```
3.  Zainstaluj zależności projektu (w tym `live-server`) za pomocą npm:
    ```bash
    npm install
    ```

## Uruchamianie

Aby uruchomić lokalny serwer deweloperski i wyświetlić stronę:

1.  Upewnij się, że jesteś w głównym katalogu projektu w terminalu.
2.  Wykonaj polecenie:
    ```bash
    npm start
    ```

Spowoduje to uruchomienie `live-server`, który będzie serwował pliki z bieżącego katalogu (`.`) na porcie `8080`.

Strona powinna automatycznie otworzyć się w Twojej domyślnej przeglądarce pod adresem:

`http://localhost:8080`

Jeśli strona nie otworzy się automatycznie, otwórz przeglądarkę i ręcznie wpisz powyższy adres. Serwer będzie automatycznie odświeżał stronę przy zmianach w plikach HTML, CSS lub JS.

Aby zatrzymać serwer, wróć do terminala i naciśnij `Ctrl + C`.