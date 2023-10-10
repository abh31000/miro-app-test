import * as React from 'react';
import {createRoot} from 'react-dom/client';

async function addSticky() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });

  await miro.board.viewport.zoomTo(stickyNote);
}

async function embedTest() {
  const file = await miro.board.createEmbed({
    url: "https://www.orimi.com/pdf-test.pdf",
    previewUrl: "https://res.cloudinary.com/dbiudcrba/image/upload/v1687099381/brett-jordan-kuEMUoDZepY-unsplash_bssoya.jpg",
    mode: "inline",
  })

  await miro.board.viewport.zoomTo(file)
}

const App: React.FC = () => {
  React.useEffect(() => {
    //addSticky();
    embedTest();
  }, []);

  return (
    <div className="grid wrapper">
      <h1>Test</h1>
      <input type="text" />
      <div className="cs1 ce12">
        <img src="/src/assets/congratulations.png" alt="" />
      </div>
      <div className="cs1 ce12">
        <h1>Congratulations!</h1>
        <p>You've just created your first Miro app!</p>
        <p>
          To explore more and build your own app, see the Miro Developer
          Platform documentation.
        </p>
      </div>
      <div className="cs1 ce12">
        <a
          className="button button-primary"
          target="_blank"
          href="https://developers.miro.com"
        >
          Read the documentation
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
