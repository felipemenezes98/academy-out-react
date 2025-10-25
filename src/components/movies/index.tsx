import { Info } from './info'
import { CardMovie } from './card-movie'

export function Movies() {
  const movies = [
    {
      title: 'Movie Title 1',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1757529308315-7d2d814f808d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Movie Title 2',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1759031807436-bffa8890cc5c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Movie Title 3',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1759334554447-06a3025799ec?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Movie Title 4',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1651505328380-2250c931ff8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  const trendingMovies = [
    {
      title: 'Movie Title 1',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Movie Title 1',
      description: 'Movie Description',
      src: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col space-y-10 p-10">
      <section>
        <Info title="Hoje" description="Filmes populares" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {movies.map((movie, index) => {
            return (
              <CardMovie
                key={'movie.title' + index}
                title={movie.title}
                description={movie.description}
                src={movie.src}
              />
            )
          })}
        </div>
      </section>
      <section>
        <Info title="Hoje" description="Filmes populares" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trendingMovies.map((movie, index) => {
            return (
              <CardMovie
                key={index}
                title={movie.title}
                description={movie.description}
                src={movie.src}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
