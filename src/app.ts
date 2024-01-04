import express from 'express';
import conversionController from './controllers/conversion';

const PORT = process.env.PORT || 5001;

class App {

  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public async main(): Promise<void> {
    this._useMiddlewares();
    this._useRoutes();
    this._listen();
  }

  private _useMiddlewares(): void {
    this.app.use(express.json());
  }

  private _useRoutes(): void {
    this.app.use('/conversion', conversionController);
  }

  private _listen(): void {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}...`);
    });
  }

}

export default App;