import Search from "@/public/assets/search.svg";
import Filter from "@/public/assets/filter.svg";
import Cancel from "@/public/assets/cancel.svg";
import Upload from "@/public/assets/upload.svg";
import Options from "@/public/assets/options.svg";
import GreenFile from "@/public/assets/green-file.svg";
import BlueFile from "@/public/assets/blue-file.svg";
import Plus from "@/public/assets/plus.svg";
import FileOptions from "@/public/assets/file-options.svg";
import StudioStorageIcon from "@/public/assets/studio-storge-icon.svg";
import CollectionBg from "@/public/assets/collection-bg.png";
import Image from "next/image";

export default function Studio() {
  return (
    <main className="studio">
      <div className="studio__inner">
        <div className="studio__inner__title">
          <div>My Studio</div>
          <form action="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"
                fill="#A0A0A0"
              />
            </svg>

            <input type="text" placeholder="Search your files" />
            <Image src={Filter} width={24} height={24} alt="" />
          </form>
        </div>

        <div className="studio__inner__upload">
          <div className="studio__inner__upload__title">Upload Files</div>

          <div className="studio__inner__upload__inner">
            <Image src={Upload} alt="" />
            <div className="studio__inner__upload__inner__title">
              Drag and drop files, or Browse
            </div>
            <div className="studio__inner__upload__inner__subtitle">
              Support .jpg and .png files
            </div>
          </div>
        </div>

        <div className="studio__inner__filter">
          <div>
            <label htmlFor="">Category/Type</label>
            <select name="" id="">
              <option value="">Choose category</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Tags</label>
            <div className="studio__inner__filter__tags">
              <div className="studio__inner__filter__tags__tag">
                Nature
                <Image src={Cancel} width={10} height={10} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="studio__inner__uploaded">
          <div className="studio__inner__uploaded__title">
            <div>Uploaded Files</div>
            <div>View All</div>
          </div>
          <div className="studio__inner__uploaded__inner">
            <div className="studio__inner__uploaded__inner__title">
              <div>Name</div>
              <div>File Size</div>
            </div>

            <div className="studio__inner__uploaded__inner__card">
              <div className="studio__inner__uploaded__inner__card__title">
                <Image width={40} height={40} src={GreenFile} alt="" />
                <div>hallow grounds.png</div>
              </div>
              <div className="studio__inner__uploaded__inner__card__actions">
                <div>2.8 MB</div>
                <Image width={3} height={15} src={Options} alt="" />
              </div>
            </div>
            <div className="studio__inner__uploaded__inner__card">
              <div className="studio__inner__uploaded__inner__card__title">
                <Image width={40} height={40} src={BlueFile} alt="" />
                <div>Shallow waters.jpg</div>
              </div>
              <div className="studio__inner__uploaded__inner__card__actions">
                <div>2.8 MB</div>
                <Image width={3} height={15} src={Options} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="studio__inner__collections">
          <div className="studio__inner__collections__title-group">
            <div className="studio__inner__collections__title-group__title">
              <div>My Collections</div>
              <div>Let’s help you organise</div>
            </div>

            <div className="studio__inner__collections__title-group__button-group">
              <button>
                <Image src={Plus} width={24} height={24} alt="" />
                Create
              </button>
              <button>View All</button>
            </div>
          </div>

          <div className="studio__inner__collections__files">
            <div className="studio__inner__collections__files__file">
              <Image className="studio__inner__collections__files__file__bg" src={CollectionBg} objectFit="cover" layout="fill" alt="" />
              <div className="studio__inner__collections__files__file__options">
              <Image  src={FileOptions} width={34} height={34} alt="" />
              </div>

              <div className="studio__inner__collections__files__file__title">
                Summer
              </div>
              <div className="studio__inner__collections__files__file__edited">
                Edited 8m ago
              </div>
            </div>
            <div className="studio__inner__collections__files__file">
              <Image className="studio__inner__collections__files__file__bg" src={CollectionBg} objectFit="cover" layout="fill" alt="" />
              <div className="studio__inner__collections__files__file__options">
              <Image  src={FileOptions} width={34} height={34} alt="" />
              </div>

              <div className="studio__inner__collections__files__file__title">
              Abstract
              </div>
              <div className="studio__inner__collections__files__file__edited">
                Edited 8m ago
              </div>
            </div>
            <div className="studio__inner__collections__files__file">
              <Image className="studio__inner__collections__files__file__bg" src={CollectionBg} objectFit="cover" layout="fill" alt="" />
              <div className="studio__inner__collections__files__file__options">
              <Image  src={FileOptions} width={34} height={34} alt="" />
              </div>

              <div className="studio__inner__collections__files__file__title">
              My space
              </div>
              <div className="studio__inner__collections__files__file__edited">
                Edited 8m ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="studio__card">
        <div className="studio__card__title">
          <div>Storage</div>
          <div>View Details</div>
        </div>

        <div className="studio__card__tabs">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="studio__card__size">
          33 gb <span>/ 256 gb</span>
        </div>

        <Image className="studio__card__image" src={StudioStorageIcon} width={106} height={122} alt="" />

        <div className="studio__card__start">
          <div className="studio__card__start__title">
            Lets help you <br /> sell more Art
          </div>
          <div className="studio__card__start__subtitle">
            Get unlimited access today
          </div>
          <button>Upgrade Studio</button>
        </div>
      </div>
    </main>
  );
}
