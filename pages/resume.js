export default function Resume() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pb-10">
        <div className="flex justify-center w-full max-w-4xl pb-5 md:justify-start">
          <a
            className="capitalize rounded btn btn-primary btn-sm text-primary-content font-semi my"
            href="https://mgqajzspdkingrdcdwwl.supabase.co/storage/v1/object/public/pub-files/01_17_2024.pdf?t=2024-01-17T20%3A21%3A41.813Z"
            download="Cameron-Leverett-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
        <embed
          className="w-full h-screen max-h-screen overflow-hidden border rounded bg-primary"
          type="application/pdf"
          src="https://mgqajzspdkingrdcdwwl.supabase.co/storage/v1/object/public/pub-files/01_17_2024.pdf?t=2024-01-17T20%3A21%3A41.813Z"
        />
      </div>
    </>
  );
}
