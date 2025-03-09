import WidgetClient from './WidgetClient';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          TextBuddy Demo - Your AI Text Assistant
        </p>
      </div>

      <div className="relative flex flex-col place-items-center my-16">
        <h1 className="text-3xl font-bold text-center mb-4">
          TextBuddy
        </h1>
        <p className="text-center mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
          Your handy little writing buddy that floats on your screen. It helps you create, refine, 
          and enhance text without interrupting your workflow.
        </p>
      </div>

      <div className="mb-32 grid gap-12 text-center lg:max-w-5xl lg:w-full lg:grid-cols-3">
        <div className="group rounded-lg border border-transparent px-5 py-4 bg-blue-50 dark:bg-blue-900/20">
          <h2 className="mb-3 text-xl font-semibold">
            Privacy First
          </h2>
          <p className="text-sm opacity-80">
            We don&apos;t peek at what you&apos;re typing. You control when TextBuddy assists you.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 bg-purple-50 dark:bg-purple-900/20">
          <h2 className="mb-3 text-xl font-semibold">
            Powered by AI
          </h2>
          <p className="text-sm opacity-80">
            Advanced AI language models help you write better text for any situation.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 bg-green-50 dark:bg-green-900/20">
          <h2 className="mb-3 text-xl font-semibold">
            Always Available
          </h2>
          <p className="text-sm opacity-80">
            TextBuddy floats on your screen, ready whenever you need writing assistance.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mb-16">
        <p className="text-center max-w-2xl">
          <strong>👇 Try it out!</strong> The widget below demonstrates the core functionality. In the actual browser extension, 
          this widget will float on top of any website you visit.
        </p>
      </div>
      
      {/* This is our widget component */}
      <div className="relative w-full h-[400px] border p-8 rounded-xl bg-gray-50 dark:bg-gray-900/30">
        <WidgetClient />
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
          ⚡ Try dragging the widget using its header, or typing a prompt! ⚡
        </div>
      </div>
    </main>
  );
}
