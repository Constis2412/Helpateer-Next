// "use client" ist hier nicht nötig, da wir serverseitig rendern
export default async function JobsPage() {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", // Verhindert das Cachen der Daten
  });

  if (!response.ok) {
    return <p>Failed to load posts.</p>;
  }

  const posts = await response.json();

  return (
    <div>
      <h1>Job Posts</h1>
      <ul className="flex flex-wrap gap-8">
        {posts.map((post) => (
          <li className="gap-8" key={post.id}>
            <div className="card bg-base-100 w-96 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">Title: {post.title}</h2>
                <p>
                  {" "}
                  <strong>Beschreibung: </strong> {post.content}
                </p>
                <p>
                  <strong>Location: </strong> {post.location}
                </p>
                <p>
                  <strong>Due Date:</strong>{" "}
                  {new Date(post.dueDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Due Time:</strong>{" "}
                  {new Date(post.dueTime).toLocaleTimeString()}
                </p>
                <p>
                  <strong>Author:</strong> {post.author.firstname}{" "}
                  {post.author.lastname}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
