import type { NextPage } from 'next'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import '../styles/home.css'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <PostCard
          title="İlk Post"
          content="GizGram’a hoş geldin!"
          image="https://via.placeholder.com/400x200"
        />
        <PostCard
          title="İkinci Post"
          content="Buraya başka postlar da ekleyebilirsin."
        />
      </main>
    </div>
  )
}

export default Home
