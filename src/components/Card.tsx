import { Repository } from '../interfaces/repository';

type Props = {
  repository: Repository,
}

function Card({ repository }: Props) {
  return (
    <div>
      <h2>{ repository.name }</h2>
      <p>{ repository.description }</p>
      <button>Like</button>
    </div>
  )
}

export default Card