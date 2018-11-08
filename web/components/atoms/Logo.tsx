import { css } from 'emotion'
import { Component, Prop } from 'vue-property-decorator'
import { VueT } from '../../utils/vue-tsx'
import { block } from '../../variables/directives'

interface Props {
    color: string
}

@Component
export class Logo extends VueT<Props> implements Props {
    @Prop()
    color!: string

    render() {
        return (
            <nuxt-link class={block} to="/">
                <svg
                    class={css({
                        display: 'block',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        path: {
                            fill: this.color,
                        },
                    })}
                    version="1.1"
                    viewBox="0 0 84.667 33.867"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsCc="http://creativecommons.org/ns#"
                    xmlnsDc="http://purl.org/dc/elements/1.1/"
                    xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g transform="translate(0 -263.13)">
                        <path d="m58.573 265.85c-0.27221 0-0.49403 0.12732-0.66416 0.38255-0.15312 0.23824-0.22929 0.55323-0.22929 0.94454 0 0.37428 0.03414 0.68807 0.10217 0.94328-0.17014 0.35726-0.3828 0.7576-0.63799 1.2-0.2552 0.44232-0.57814 0.95297-0.96945 1.5314-0.3913 0.57844-0.7234 1.0629-0.99562 1.4542-0.2552 0.37428-0.63849 0.91904-1.1489 1.6336-0.51039 0.69754-0.84125 1.1649-0.99437 1.4031-1.3951 2.0756-3.2841 4.5764-5.6659 7.5026-0.08507 0.10196-0.2636 0.21363-0.53581 0.33271-0.27221 0.10196-0.40871 0.20328-0.40871 0.30527 0 0.20424 0.17853 0.30655 0.53581 0.30655 0.23819 0 0.52825-0.23751 0.86852-0.71401 0.1191-0.136 0.50114-0.59555 1.1476-1.3782 0.6465-0.7996 1.0718-1.3352 1.276-1.6074 0.22116-0.27218 0.57034-0.70668 1.0467-1.3021 0.47636-0.61247 0.88463-1.1572 1.2249-1.6336 0.35728-0.47637 0.70644-0.96079 1.0467-1.4542 2.2266-3.0408 3.7434-5.2238 4.5743-6.5768 0.34925 0.63143 0.8622 1.0514 1.5476 1.2486-0.95202 1.9389-1.9382 4.4628-2.9582 7.5736-1.9225 0.61248-3.335 1.2937-4.2367 2.0423-0.9017 0.73157-1.352 1.6584-1.352 2.7812 0 0.62949 0.1877 1.1231 0.56198 1.4803 0.3913 0.37428 0.9007 0.56074 1.5302 0.56074 0.93572 0 1.6852-0.46738 2.2467-1.4031 0.57844-0.95274 1.2243-2.5346 1.9389-4.7463 0.01713-0.0683 0.03407-0.12852 0.05109-0.1794 0.01712-0.0682 0.04323-0.14419 0.07726-0.22932 0.03402-0.0851 0.05901-0.15336 0.076-0.20447l1.4803-0.43365c0.23819-0.0683 0.3826-0.13648 0.43363-0.20448 0.06805-0.0851 0.04309-0.13624-0.076-0.15336-0.11909-0.034-0.27266-0.0249-0.4598 0.0263-0.29378 0.0774-0.72531 0.20013-1.2299 0.34766 0.96255-2.8142 1.9177-5.2033 2.8635-7.1625 0.7826-0.0679 1.4876-0.40806 2.1171-1.0205 0.6465-0.61247 0.9707-1.1901 0.9707-1.7345 0-0.23823-0.10239-0.44296-0.30654-0.61308-0.20416-0.1871-0.44304-0.28039-0.71525-0.28039-0.79962 0-1.7343 1.0384-2.8062 3.114-0.62948-0.18712-1.0981-0.65575-1.4043-1.4043 0.54442-1.0038 0.81743-1.6497 0.81743-1.9389 0-0.22113-0.06824-0.39965-0.20436-0.53583-0.13612-0.13623-0.31464-0.20424-0.53581-0.20424zm-47.588 0.40746c-1.7013 0-3.0547 0.42537-4.0585 1.276-1.0038 0.83366-1.5053 1.9652-1.5053 3.3943 0 0.66353 0.16148 1.5142 0.48472 2.552 0.32325 1.0378 0.76564 1.9396 1.3271 2.7052 0.10208 0.15312 0.1953 0.22931 0.28037 0.22931 0.11909-0.0169 0.11909-0.13528 0-0.35639-0.95273-1.8714-1.4292-3.5819-1.4292-5.1301 0-1.276 0.40951-2.2802 1.2261-3.0118 0.83364-0.73157 1.964-1.0966 3.3931-1.0966 2.0246 0 3.6247 0.33086 4.7986 0.99438 1.1909 0.66352 1.7856 1.5483 1.7856 2.6542 0 1.1569-0.62093 2.3488-1.8629 3.5737-1.2014 1.2014-2.4853 2.0151-3.8504 2.4473-0.27284-0.42159-0.68886-0.63548-1.2536-0.63548h-0.09095c0.72723-1.7743 1.3956-3.2642 2.0049-4.466 0.61247-1.2249 1.0378-1.9061 1.276-2.0423 0.17012-0.10197 0.27251-0.18616 0.30654-0.25421 0.05105-0.068 0.03398-0.10218-0.05109-0.10218s-0.21241 0.0251-0.38255 0.0759c-0.61247 0.20424-1.2334 0.83424-1.8629 1.8891-0.57845 0.95274-1.4803 2.9941-2.7052 6.1245-1.7353 4.4404-2.9352 6.6603-3.5987 6.6603-0.28922 0-0.52686-0.47653-0.714-1.4292v-0.051c-0.034027-0.13624-0.094369-0.20425-0.17943-0.20425-0.11909 0.0169-0.17029 0.14421-0.15327 0.38257 0.10208 1.276 0.44334 1.914 1.0218 1.914 0.73156 0 1.4287-0.57764 2.0922-1.7345 0.66351-1.1739 1.463-2.9605 2.3987-5.3594l0.05109-0.15336c0.13611 0.0342 0.27261 0.0511 0.40871 0.0511 0.24153 0 0.48245-0.0241 0.72397-0.0637 0.14779 0.46886 0.25497 1.3624 0.32149 2.6928 0.03402 0.57845 0.06024 0.97762 0.07726 1.1987 0.01713 0.20424 0.05115 0.54419 0.10217 1.0205 0.06805 0.45935 0.14422 0.79136 0.22927 0.99561l0.35762 0.71524c0.15312 0.27221 0.33956 0.45875 0.56073 0.56075 0.22116 0.10196 0.48502 0.15336 0.79126 0.15336 0.69135 0 1.5856-0.45386 2.6816-1.3595 0.09797 0.95912 0.64264 1.4668 1.6398 1.5127 0.79962-0.0169 1.6411-0.24673 2.5258-0.68908 0.85525-0.41957 1.615-0.95831 2.2865-1.6074 0.0014-3.3e-4 0.0023 3.5e-4 0.0038 0 0.2552-0.22111 0.5873-0.51123 0.99562-0.86852 0.31785-0.27966 0.48213-0.42524 0.64796-0.57195-0.49528 1.1271-0.81732 1.9694-0.92832 2.461 0 0.59538 0.32295 0.96959 0.96945 1.1227 0.85065 0 2.0963-0.75949 3.7806-2.2566 1.0208-0.88468 1.6539-1.4012 2.0112-1.6735l0.05233-0.0145c-0.84641 1.979-1.2947 3.1843-1.3283 3.5875-0.01713 0.10197 0.0092 0.18736 0.07726 0.25543 0.08508 0.068 0.19534 0.1023 0.33146 0.1023 0.23819 0 0.54407-0.1876 0.91836-0.56198 0.83364-0.85066 1.6764-1.599 2.527-2.2454 0.76514-0.59687 1.3261-0.93919 1.7059-1.0542-0.38748 0.80928-0.60954 1.5953-0.65918 2.3563 0.01713 0.52742 0.14436 0.9094 0.38255 1.1476 0.2552 0.23824 0.66346 0.35763 1.2249 0.35763 1.5242 0 2.9655-0.49285 4.3264-1.4616-0.01688 0.17193-0.03363 0.34474-0.03363 0.54328 0 0.57851 0.41742 0.90146 1.2511 0.96946 0.60108-0.079 1.2252-0.43445 1.8704-1.043-0.01472 0.1114-0.03363 0.23559-0.03363 0.30278 0 0.45937 0.1877 0.68909 0.56198 0.68909 0.73157 0 1.4207-0.17843 2.0672-0.53582 0.6465-0.37428 1.3869-0.94403 2.2205-1.7096 0.11909-0.17023 0.13617-0.28173 0.05109-0.33271-0.06805-0.0679-0.20455-0.0589-0.40871 0.0263-0.9017 0.78259-1.6079 1.3274-2.1183 1.6336-0.49338 0.30623-0.94368 0.45978-1.352 0.45978-0.08507 0-0.15331-0.0774-0.20436-0.23053-0.03402-0.15312-0.02612-0.30551 0.0249-0.45855 0.05105-0.15311 0.0943-0.29871 0.12835-0.43488 0.05105-0.15312 0.09308-0.28834 0.1271-0.40746 0.05105-0.11911 0.11015-0.27265 0.1782-0.45981 0.22117-0.20424 0.3327-0.35772 0.3327-0.4598 0-0.0679-0.0092-0.11791-0.02615-0.1519 0.10207-0.11912 0.15326-0.20448 0.15326-0.25545 0-0.0511-0.05118-0.11142-0.15326-0.17941h-0.1134c-0.28708-0.76424-0.63103-1.192-1.0342-1.276-0.18714 0-0.36693 0.0263-0.53706 0.0772-0.17012 0.034-0.32245 0.068-0.45856 0.10218-0.13609 0.034-0.28052 0.093-0.43363 0.17819-0.13609 0.0851-0.25554 0.16132-0.35762 0.22931-0.08505 0.068-0.19534 0.17049-0.33146 0.30654-0.11909 0.11911-0.21357 0.21243-0.28161 0.28037-0.05105 0.068-0.1272 0.17941-0.22929 0.33269-0.11909 0.15312-0.20441 0.26347-0.25544 0.33147-0.05105 0.0679-0.1272 0.19531-0.22927 0.38255-0.11909 0.17024-0.19524 0.28048-0.22929 0.33146-0.0021 5e-3 -0.0029 0.0145-5e-3 0.0193-1.304 1.0222-2.6478 1.5376-4.0335 1.5376-0.59545 0-0.9105-0.30713-0.94453-0.9196 0.01711-0.85063 0.2638-1.7013 0.74017-2.552 0.08507-0.17025 0.07717-0.28058-0.02491-0.33146-0.10207-0.068-0.31475-0.10229-0.63799-0.10229-0.56143 0.034-1.2847 0.33992-2.1694 0.91837-0.82032 0.54689-1.6407 1.2439-2.461 2.0797 0.08193-0.27863 0.32951-0.91848 0.8274-2.1046 0.17024-0.42533 0.22131-0.74027 0.15326-0.94451-0.05105-0.16999-0.2046-0.25545-0.4598-0.25545-0.34026 0-0.61994 0.0851-0.8411 0.25545-0.93572 0.81664-1.6292 1.4605-2.1906 2.0049-1.4631 1.344-2.5053 2.0273-3.1688 2.0273-0.22116 0-0.33146-0.22979-0.33146-0.68906 0.30624-0.91871 0.76569-1.8035 1.3782-2.6541 0.23819-0.4083 0.36543-0.66311 0.38255-0.7651 0.05105-0.30625-0.04218-0.45979-0.28037-0.45979-0.35728 0-0.76554 0.1876-1.2249 0.56198-0.1191 0.10196-0.41707 0.39092-0.89344 0.86727-0.42715 0.42716-0.82756 0.79882-1.2137 1.1439-0.0017 9.6e-4 -0.0032 2e-3 -5e-3 5e-3 -1.6162 1.4292-3.0366 2.1695-4.2616 2.2205-0.2552-0.0169-0.45995-0.10229-0.61307-0.25545-0.13609-0.17-0.22143-0.33949-0.25544-0.50963-0.01713-0.17023-0.02491-0.39987-0.02491-0.68908 2.3478-1.5482 3.5988-2.5774 3.7519-3.0878 0.05105-0.54435-0.29022-0.83444-1.0218-0.86851-0.83364 0.17-1.641 0.67287-2.4236 1.5065-0.63273 0.6749-1.05 1.3803-1.276 2.1134-1.2218 0.97124-2.1056 1.4841-2.6105 1.4841-0.76559 0-1.225-1.3522-1.3782-4.0572-0.10207-1.4631-0.22152-2.407-0.35762-2.8323 1.5822-0.47635 3.0538-1.3362 4.4148-2.5781 1.3781-1.242 2.0672-2.602 2.0672-4.0821 0-1.1909-0.66296-2.144-1.99-2.8585-1.31-0.73156-3.0625-1.0978-5.2572-1.0978zm51.721 1.0978c0.27221 0 0.40872 0.16155 0.40872 0.48471 0 0.37432-0.26385 0.81668-0.79126 1.3271-0.47817 0.47821-0.97106 0.75372-1.4791 0.84359 0.87002-1.7656 1.4913-2.6554 1.8616-2.6554zm15.404 0.86726c-0.40832 0-0.82448 0.26385-1.2498 0.79127-1.344 1.6333-3.2921 5.2485-5.8441 10.846-0.34026 0.30624-0.80762 0.70659-1.4031 1.2-0.59546 0.49331-0.97875 0.80712-1.1489 0.94329v9.6e-4c-0.80732 0.60061-1.4517 1.0453-1.899 1.3009-0.45935 0.25515-0.97791 0.45074-1.5563 0.58689-0.15312 0-0.22929-0.0682-0.22929-0.20424 0.034-0.23823 0.10229-0.48497 0.20436-0.74015 0.10209-0.25511 0.18615-0.45988 0.25419-0.61307 0.08508-0.17024 0.19659-0.37366 0.33271-0.61182 0.15312-0.25522 0.25424-0.43375 0.30528-0.53582 0.06805-0.34026 0.07721-0.56207 0.02616-0.66416-0.05105-0.10197-0.24664-0.15336-0.5869-0.15336-0.57845 0.034-1.2256 0.31493-1.9401 0.84234-0.6671 0.47651-1.5049 1.2058-2.4834 2.142 0.03456-0.11019 0.07166-0.22401 0.21309-0.6355 0.20416-0.54441 0.39976-1.1312 0.5869-1.7607 0.17012-0.42534 0.22131-0.74037 0.15326-0.94451-0.05105-0.17025-0.2046-0.25546-0.4598-0.25546-0.40831 0-0.81658 0.1102-1.2249 0.33145-0.52741 0.57845-1.1142 1.1823-1.7607 1.8118-0.08507 0.11912-0.08507 0.2216 0 0.30655 0.08507 0.068 0.2045 0.068 0.35763 0 0.37429-0.30624 0.73927-0.64625 1.0965-1.0205 0.35727-0.39136 0.57909-0.62109 0.66416-0.68909 0.13612-0.0508 0.21227-0.0261 0.22929 0.0759-0.11909 0.49337-0.34882 1.1746-0.68908 2.0423-0.34027 0.85067-0.51881 1.3613-0.53581 1.5314-0.01713 0.10195 5.1e-5 0.17023 0.05109 0.20424 0.05105 0.0508 0.13636 0.0759 0.25544 0.0759 0.17012 0 0.36573-0.0511 0.5869-0.15335 0.23819-0.0851 0.3826-0.16132 0.43364-0.22933 0.06805-0.068 0.17834-0.17047 0.33146-0.30654 0.98676-0.90169 1.7692-1.5817 2.3476-2.0411 0.53255-0.41084 0.979-0.66364 1.3483-0.77507-0.64052 1.3686-1.0176 2.3154-1.1177 2.8162 0 0.4084 0.22972 0.63812 0.68908 0.68907 1.1739 0 2.7125-0.7574 4.618-2.2716 0.01544-0.0144 0.02218-0.0326 0.03488-0.0484 0.78832-0.64554 1.2978-1.062 1.4442-1.1788-1.3034 2.9154-2.3999 5.6151-3.2809 8.092-0.91871 2.535-1.3782 4.2454-1.3782 5.1301 0 0.37428 0.09448 0.66311 0.28161 0.86725 0.18714 0.22111 0.44185 0.33146 0.76509 0.33146 0.56143 0 1.2086-1.003 1.9401-3.0105 0.71455-1.9905 1.2922-4.0069 1.7345-6.0484 0.44234-2.0246 0.64954-3.3006 0.64954-3.828 0.01347-0.44462-7.66e-4 -0.62895-0.02201-1.0536 0.01689-0.034 0.02751-0.0614 0.06154-0.14633 0.034-0.0851 0.06023-0.1442 0.07726-0.17819 0.57845 0.23823 1.3608 0.35764 2.3476 0.35764 0.68834 0 1.5254-0.21243 2.5021-0.62429-0.5417 0.65762-0.82864 1.3486-0.82864 2.0784 0 0.56142 0.16146 0.9697 0.48472 1.2249 0.32325 0.23825 0.85886 0.35763 1.6074 0.35763 1.1399 0 1.9314-0.26385 2.3738-0.79125 0.44233-0.5274 0.655-1.2757 0.63799-2.2454 0-1.3951-0.53562-2.0922-1.6074-2.0922-0.3913 0-0.92815 0.17843-1.6087 0.53581-0.10207 0.034-0.1612 0.0591-0.1782 0.0759l-0.17072 0.12829c-1.2237 0.54362-2.2431 0.81618-3.0591 0.81618-0.95273 0-1.7102-0.11165-2.2716-0.33271 0.05105-0.0851 0.09308-0.16928 0.1271-0.25421 0.034-0.0851 0.06814-0.1794 0.10217-0.28161 0.05105-0.10219 0.0943-0.18616 0.12835-0.2542 1.6673-1.6162 3.1901-3.6155 4.5681-5.9974 1.3951-2.3989 2.0922-4.0411 2.0922-4.9257 0-0.42535-0.17062-0.63802-0.5109-0.63802zm-0.05109 0.48473c0.10207 0 0.15326 0.12731 0.15326 0.38255 0 0.25519-0.23763 0.90233-0.714 1.9401-0.45935 1.0378-1.1735 2.3217-2.1432 3.8529-0.88186 1.3769-1.8088 2.5697-2.775 3.5949 2.062-4.3832 3.6732-7.461 4.8161-9.1836 0.2552-0.39131 0.47577-0.58691 0.66292-0.58691zm-67.981 7.5288h0.0648c0.22116 0 0.41677 0.14443 0.5869 0.43366-0.23819 0.0342-0.40881 0.0511-0.51089 0.0511-0.10207 0-0.20446-0.0169-0.30653-0.0511 0.017125-0.068 0.043229-0.15336 0.077261-0.25546 0.044436-0.0887 0.069827-0.14083 0.088476-0.1782zm16.194 0.10229c-0.18714 0.0169-0.36567 0.11019-0.53581 0.28036-0.17012 0.15311-0.27251 0.31448-0.30654 0.48472 0.01713 0.20423 0.06031 0.34849 0.12835 0.43362 0.08507 0.0851 0.22946 0.12828 0.43363 0.12828 0.57845-0.0851 0.92761-0.29772 1.0467-0.63798 0-0.11911-0.08531-0.26365-0.25544-0.43365-0.17014-0.18711-0.34078-0.27232-0.51089-0.25543zm30.316 2.0622-0.05732 0.2093c-0.49338 1.5652-0.9699 2.7808-1.4292 3.6485-0.44234 0.85066-0.80732 1.3784-1.0965 1.5825-0.27221 0.1871-0.5781 0.28037-0.91836 0.28037-0.40831 0-0.73251-0.13526-0.97069-0.40747-0.22116-0.28922-0.33146-0.68166-0.33146-1.175 0-0.86768 0.38329-1.6239 1.1489-2.2704 0.76293-0.64685 1.9864-1.2696 3.6547-1.8679zm-36.714 0.92334c0.13609 0.034 0.18728 0.14419 0.15326 0.33146-0.05105 0.18711-0.28077 0.45101-0.68908 0.79126-0.36737 0.30347-1.111 0.84418-2.1682 1.5825 0.19679-0.6316 0.53185-1.1868 1.0193-1.6585 0.54442-0.5274 1.1063-0.87658 1.6847-1.0467zm59.018 0.48473c0.28923 0 0.52686 0.16156 0.714 0.48473 0.20417 0.32324 0.30654 0.72358 0.30654 1.2 0 1.5822-0.7824 2.3725-2.3476 2.3725v9.6e-4c-0.35728 0-0.62113-0.0945-0.79126-0.28161-0.15312-0.20424-0.23052-0.53502-0.23052-0.99437 0-0.71455 0.14567-1.2855 0.43488-1.7109 0.0631-0.0884 0.11965-0.16927 0.17822-0.22931 0.22116-0.22112 0.50208-0.41677 0.84235-0.58691 0.35727-0.17025 0.65526-0.25543 0.89344-0.25543zm-36.434 0.38253c0.18714 0.068 0.34072 0.2216 0.4598 0.45982 0.13612 0.23824 0.2031 0.50995 0.2031 0.81618-0.13612 0.47638-0.35668 0.91084-0.66291 1.3022-0.28922 0.39121-0.54392 0.66296-0.76509 0.81616-0.20417 0.13626-0.39185 0.23849-0.56198 0.30654-0.17012 0-0.32369-0.0762-0.4598-0.22931-0.13612-0.15312-0.20436-0.34082-0.20436-0.56199 0-0.57847 0.21265-1.1994 0.63799-1.8629 0.42533-0.68047 0.87687-1.0296 1.3532-1.0467zm28.298 2.2741c6.29e-4 0.0294 5e-3 0.0408 5e-3 0.0735v9.6e-4c0 0.40834-0.21265 1.5819-0.63799 3.5214-0.40831 1.9395-0.91896 3.8614-1.5314 5.7669-0.62948 1.9225-1.1559 2.8834-1.5813 2.8834-0.05105 0-0.10224-0.067-0.15326-0.20303-0.05105-0.13599-0.07726-0.28168-0.07726-0.43488 0-1.6552 1.3308-5.5332 3.9762-11.608z" />
                        <path
                            d="m9.9258 288.54v0.13281h47.865v-0.13281z"
                            color="#000000"
                            color-rendering="auto"
                            dominant-baseline="auto"
                            image-rendering="auto"
                            shape-rendering="auto"
                            solid-color="#000000"
                            style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"
                        />
                        <g stroke-width=".26458" aria-label="UNOFFICIAL">
                            <path d="m13.513 294.98c0.45932 0 1.0569-0.34572 1.0569-0.98778v-1.8323h-0.22719v1.8471c0 0.39017-0.36054 0.74083-0.8248 0.74083-0.46426 0-0.83467-0.34572-0.83467-0.74083v-1.8471h-0.22719v1.8323c0 0.64206 0.58279 0.98778 1.0569 0.98778z" />
                            <path d="m19.614 292.16v2.4003l-1.7187-2.4003h-0.18768v2.8053h0.22719v-2.3855l1.7089 2.3904h0.19756v-2.8102z" />
                            <path d="m24.075 294.99c0.73589 0 1.3335-0.63712 1.3335-1.4224s-0.59761-1.4224-1.3335-1.4224c-0.7359 0-1.3286 0.63712-1.3286 1.4224s0.5976 1.4224 1.3286 1.4224zm0-0.22225c-0.60748 0-1.0964-0.53834-1.0964-1.2002s0.48895-1.1952 1.0964-1.1952 1.0964 0.5334 1.0964 1.1952-0.48895 1.2002-1.0964 1.2002z" />
                            <path d="m29.967 292.38v-0.22225h-1.6496v2.8053h0.22719v-1.3384h1.1755v-0.20744h-1.1755v-1.0372z" />
                            <path d="m34.447 292.38v-0.22225h-1.6496v2.8053h0.22719v-1.3384h1.1755v-0.20744h-1.1755v-1.0372z" />
                            <path d="m37.277 294.97h0.22225v-2.8053h-0.22225z" />
                            <path d="m41.829 294.99c0.34078 0 0.63712-0.12347 0.86431-0.35066l-0.11853-0.13829c-0.19756 0.17286-0.46426 0.27164-0.75071 0.27164-0.65687 0-1.1903-0.53834-1.1903-1.2051 0-0.66181 0.52846-1.2051 1.1952-1.2051 0.28152 0 0.54328 0.0988 0.74577 0.27164l0.11853-0.13335c-0.21237-0.21731-0.51858-0.3556-0.86924-0.3556-0.7754 0-1.4175 0.63712-1.4175 1.4224s0.63712 1.4224 1.4224 1.4224z" />
                            <path d="m45.504 294.97h0.22225v-2.8053h-0.22225z" />
                            <path d="m50.604 294.97h0.23707l-1.0767-2.8053h-0.19756l-1.0767 2.8053h0.23213l0.36548-0.94827h1.1557zm-1.4372-1.1557 0.49883-1.2989 0.49883 1.2989z" />
                            <path d="m53.596 294.97h1.6644v-0.21732h-1.4372v-2.588h-0.22719z" />
                        </g>
                    </g>
                </svg>
            </nuxt-link>
        )
    }
}
