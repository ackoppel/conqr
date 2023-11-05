import * as elements from 'typed-html';
import PageFrame from '../../components/frames/PageFrame';

interface IBlock {
  title: string;
  /** @todo - Goal item interface. */
  goals: unknown[];
}

interface IProps {
  blocks: IBlock[];
}

const Home = ({ blocks }: IProps) => (
  <PageFrame>
    <div class="flex w-full">
      {/* Blocks */}
      <div class="w-full">
        {blocks.map((block) => (
          <div class="mb-5 flex w-full flex-col">
            <h2 class="border-b border-b-slate-200 pb-1 text-title">
              {block.title}
            </h2>
            <div class="px-2 py-1 text-slate-500">No items</div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div class="w-5/12 ml-6 min-h-full border-l border-l-slate-200 pl-6">
        Siia tuleb statistika ja muu jama
      </div>
    </div>
  </PageFrame>
);

export default Home;
