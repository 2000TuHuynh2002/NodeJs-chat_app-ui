# React-chat_app

## Introduction
Today project is a chat application with React + Vite. This project use Typescript programming languague.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,react,vite,typescript&perline=10"/>
  </a>
</p>


## Features
<div align="center">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Feature</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>authentication</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>2</td>
        <td>chat (sending and receving)</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>3</td>
        <td>message status (send, deliveried, seen)</td>
        <td>⬜</td>
      </tr>      
      <tr>
        <td>4</td>
        <td>attachments</td>
        <td>⬜</td>
      </tr>
      <tr>
        <td>5</td>
        <td>user's avatar</td>
        <td>⬜</td>
      </tr>
    </tbody>
  </table>
</div>

## Usage
1. Install node_modules packages:
    ```bash
    npm install
    ```

3. Copy `.env.example` to `.env`:
    ```bash
    cp ./.env.example ./.env
    ```

4.  Modify API endpoint in `.env`:
    ```properties
    API_URL=localhost:5000
    ```

5.  Start the server (choose dev or prod environment). The dev-server will restart every time the code is changed.
    ```bash
    # Dev environment
    npm run dev

    # Prod environment
    npm run prod

    # Serve static file 
    # This is a quick way, not recommend for production. Use web server like Nginx instead.
    npx serve dist
    ```

## Available routes
<div align="center">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>/</td>
        <td>home page</td>
      </tr>
      <tr>
        <td>2</td>
        <td>/about</td>
        <td style="color:red">[not implemented yet]</td>
      </tr>
      <tr>
        <td>3</td>
        <td>/dashboard</td>
        <td style="color:red">[not implemented yet]</td>
      </tr>      
      <tr>
        <td>4</td>
        <td>/profile</td>
        <td>profile page</td>
      </tr>
      <tr>
        <td>5</td>
        <td>/settings</td>
        <td style="color:red">[not implemented yet]</td>
      </tr>
      <tr>
        <td>6</td>
        <td>/settings</td>
        <td style="color:red">[not implemented yet]</td>
      </tr>
      <tr>
        <td>7</td>
        <td>/chat/messages</td>
        <td>chap application</td>
      </tr>
      <tr>
        <td>9</td>
        <td>/auth/login</td>
        <td>login page</td>
      </tr>
      <tr>
        <td>10</td>
        <td>/auth/register</td>
        <td>register page</td>
      </tr>
    </tbody>
  </table>
</div>


## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!